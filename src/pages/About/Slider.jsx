import { Box } from "@mui/material";
import { useEffect, useRef } from "react";





const images=[
    "https://lazeapostolski.com/industrial2/img/certificate2.jpg",
    "https://lazeapostolski.com/industrial2/img/certificate3.jpg",
    "https://lazeapostolski.com/industrial2/img/certificate4.jpg",
    "https://lazeapostolski.com/industrial2/img/certificate1.jpg",

]
export default function Slider() {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        if (!slider) return;

        
        slider.innerHTML += slider.innerHTML + slider.innerHTML;

        const itemWidth = slider.querySelector('img')?.offsetWidth + 16 || 116;
        const totalItems = slider.children.length / 3;
        const middleScroll = itemWidth * totalItems;

        slider.scrollLeft = middleScroll;

        const end = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const start = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const move = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
            const dist = x - startX;
            slider.scrollLeft = scrollLeft - dist;

            if (slider.scrollLeft <= 0) {
                slider.scrollLeft = middleScroll;
            } else if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                slider.scrollLeft = middleScroll;
            }
        };

        slider.addEventListener('mousedown', start);
        slider.addEventListener('touchstart', start);
        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);
        slider.addEventListener('mouseleave', end);
        slider.addEventListener('mouseup', end);
        slider.addEventListener('touchend', end);

        return () => {
            slider.removeEventListener('mousedown', start);
            slider.removeEventListener('touchstart', start);
            slider.removeEventListener('mousemove', move);
            slider.removeEventListener('touchmove', move);
            slider.removeEventListener('mouseleave', end);
            slider.removeEventListener('mouseup', end);
            slider.removeEventListener('touchend', end);
        };
    }, []);

    return (
    
     
    
                <div
                    ref={sliderRef}
                    className="items"
                    onCopy={(e) => e.preventDefault()}
                    onCut={(e) => e.preventDefault()}
                    onPaste={(e) => e.preventDefault()}
                    style={{
                        display: "flex",
                        overflowX: "hidden",
                        gap: "16px",
                        cursor: "grab",
                        whiteSpace: "nowrap",
                        // scrollSnapType: 'revert',
                        scrollBehavior: 'auto',
                        py: "20px",
                        // border: "2px solid #ddd",
                    }}
                >


                    {images.map((item, i) => (
                        <img
                            key={i}
                            src={item}
                            
                            style={{ maxWidth: 150, maxHeight: 150, borderRadius: 4, flexShrink: 0, zIndex:-1,
                                position:"relative",
                                scrollSnapAlign: 'start',
                             }}
                        />
                    ))}



                </div>
   
     
     
     
     
    );
}
