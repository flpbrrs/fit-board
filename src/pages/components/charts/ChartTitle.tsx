interface ChartTitleProps {
    title: string,
    subtitle?:string
}

export default function ChartTitle(props: ChartTitleProps) {
    return (
        <div className="mb-4">
            <p className="font-bold text-lg">
                {props.title}
            </p>
            <small className="text-zinc-600 text-xs leading-3">
                {props.subtitle}
            </small>
        </div>
    );
}