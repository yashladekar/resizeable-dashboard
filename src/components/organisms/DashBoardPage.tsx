"use client"
import { useEffect, useRef } from 'react'
import { createSwapy, Swapy } from "swapy"

function DashBoardPage() {
    const swapyRef = useRef<Swapy | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (containerRef.current) {
            swapyRef.current = createSwapy(containerRef.current, {
                animation: 'dynamic',
                // swapMode: 'drop',
                // autoScrollOnDrag: true,
                // enabled: true,
                // dragAxis: 'x',
                dragOnHold: true
            })

        }
        return () => {
            swapyRef.current?.destroy()
        }
    }, [])
    return (
        <div className="container" ref={containerRef}>
            <div className="grid grid-cols-3 gap-4 p-4 pt-0">
                <div data-swapy-slot="a">
                    <div className="item item-a" data-swapy-item="a">
                        <div className="aspect-video rounded-xl bg-green-500" />
                    </div>
                </div>
                <div data-swapy-slot="b">
                    <div className="item item-b" data-swapy-item="b">
                        <div className="aspect-video rounded-xl bg-purple-900" />
                    </div>
                </div>
                <div data-swapy-slot="c">
                    <div className="item item-c" data-swapy-item="c">
                        <div className="aspect-video rounded-xl bg-yellow-200" />
                    </div>
                </div>
                <div data-swapy-slot="d">
                    <div className="item item-d" data-swapy-item="d">
                        <div className="aspect-video rounded-xl bg-orange-300" />
                    </div>
                </div>
                <div data-swapy-slot="e">
                    <div className="item item-e" data-swapy-item="e">
                        <div className="aspect-video rounded-xl bg-black" />
                    </div>
                </div>
                <div data-swapy-slot="f">
                    <div className="item item-f" data-swapy-item="f">
                        <div className="aspect-video rounded-xl bg-gray-400" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashBoardPage