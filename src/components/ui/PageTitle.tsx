interface PageTitleProps {
    title: string
}

export default function PageTitle({ title }: PageTitleProps) {
    return (
        <div className="p-6 m-auto text-center">
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
    )
}