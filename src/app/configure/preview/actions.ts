"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { fetchDataFromDatabase } from "@/db/database";
import db  from "@/db/prismaClient";
import { previewdesc } from "@/lib/constants";
import { stripe } from "@/lib/stripe";


import { getServerSession, Session } from "next-auth";

type Order = Awaited<ReturnType<typeof db.order.findFirst>>;
export const creatCheckoutSession = async () => {
  const session: Session | null = await getServerSession(options);

  if (!session) {
    throw new Error("no user found, you need to be logged in");
  }
  const user = session.user?.name;
  if (!user) {
    throw new Error("user not exist");
  }

  const pre = await fetchDataFromDatabase(user);
  const product = pre[pre.length - 1].product; // the product

  const Pord = previewdesc.find((pre) => {
    // using arr.find to find the product and the product price
    pre.product === product;
    return pre.product;
  });
  let price;
  if (Pord) price = Pord.price;

  let order: Order | undefined = undefined;

  const finduser = async () => {
    try {
      const userId = await db.user.findUnique({
        where: { name: user },
      });
      return userId;
    } catch (err) {
      throw new Error("now user was found");
    }
  };
  const userId = await finduser();

  const existingOrder = await db.order.findFirst({
    where: {
      userId: userId?.id,
    },
  });
  if (existingOrder) {
    order = existingOrder;
  } else {
    order = await db.order.create({
      data: {
        amount: Number(price),
        userId: userId?.id,
        configurationId: pre[pre.length - 1].id,
      },
    });
  }
  const TheProduct = await stripe.products.create({
    name: `Custom ${product}`,
    images: [pre[pre.length - 1].img],
    default_price_data: {
      currency: "USD",
      unit_amount: Number(price) * 100,
    },
  });

  try {
    const stripeSession = await stripe.checkout.sessions.create({
      success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/thank-you?orderId=${order.id}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/configure/preview`,
      payment_method_types: ["card", "amazon_pay"],
      mode: "payment",
      shipping_address_collection: { allowed_countries: ["DE", "US", "MA"] },
      metadata: {
        userId: pre[pre.length - 1].id,
        orderId: order.id,
      },
      line_items: [{ price: TheProduct.default_price as string, quantity: 1 }],
    });
    return { url: stripeSession.url };
  } catch (err) {
    console.log("stripe err here ", err);
  }
};
