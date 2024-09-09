import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const layout = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <MaxWidthWrapper>
            {children}
        </MaxWidthWrapper>
    )
}

export default layout