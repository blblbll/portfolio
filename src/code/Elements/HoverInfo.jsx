import * as HoverCard from "@radix-ui/react-hover-card"
import '../../assets/css/Hover.css'

function HoverInfo({ label, children }) {
    return (
        <HoverCard.Root openDelay={200} closeDelay={100}>
            <HoverCard.Trigger asChild>
                <span className="hover-card">{label}</span>
            </HoverCard.Trigger>

            <HoverCard.Portal>
                <HoverCard.Content className="hover-content" sideOffset={8}>
                    {children}
                    <HoverCard.Arrow className="hover-arrow" />
                </HoverCard.Content>
            </HoverCard.Portal>
        </HoverCard.Root>
    )
}

export default HoverInfo