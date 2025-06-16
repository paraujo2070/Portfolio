"use client";
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import img1 from '../image/Captura_de_tela_de_2025-06-14 18-31-27.png';
import img2 from '../image/Captura_de_tela_de_2025-06-14 18-31-08.png';
import img3 from '../image/Captura_de_tela_de_2025-06-14 18-30-43.png';
import img4 from '../image/Captura_de_tela_de_2025-06-14 18-30-27.png';
import img5 from '../image/Captura_de_tela_de_2025-06-14 18-30-16.png';

interface ExpandedImageState {
    src: StaticImageData;
    alt: string;
}

export default function ImagemSISTFD() {
    const [expandedImage, setExpandedImage] = useState<ExpandedImageState | null>(null);

    const handleImageClick = (imageSrc: StaticImageData, imageAlt: string) => {
        setExpandedImage({ src: imageSrc, alt: imageAlt });
    };

    const handleCloseExpandedImage = () => {
        setExpandedImage(null);
    };

    return (
        <div>
            <div className="flex flex-row flex-wrap justify-center items-start gap-2 p-2">
                <div className="cursor-pointer" onClick={() => handleImageClick(img3, "Tela de Pagamento Detalhado")}>
                    <Image
                        src={img3}
                        width={250}
                        height={250}
                        alt="Tela de Pagamento Detalhado"
                        className="object-contain rounded-md hover:opacity-80 transition-opacity"
                    />
                </div>
                <div className="cursor-pointer" onClick={() => handleImageClick(img1, "Gerenciar Usuários")}>
                    <Image
                        src={img1}
                        width={250}
                        height={250}
                        alt="Gerenciar Usuários"
                        className="object-contain rounded-md hover:opacity-80 transition-opacity"
                    />
                </div>
                <div className="cursor-pointer" onClick={() => handleImageClick(img2, "Tela gerenciar viagens TFD")}>
                    <Image
                        src={img2}
                        width={250}
                        height={250}
                        alt="Tela gerenciar viagens TFD"
                        className="object-contain rounded-md hover:opacity-80 transition-opacity"
                    />
                </div>
                <div className="cursor-pointer" onClick={() => handleImageClick(img4, "Pagina inicial")}>
                    <Image
                        src={img4}
                        width={250}
                        height={250}
                        alt="Pagina inicial"
                        className="object-contain rounded-md hover:opacity-80 transition-opacity"
                    />
                </div>
                <div className="cursor-pointer" onClick={() => handleImageClick(img5, "Tela de login")}>
                    <Image
                        src={img5}
                        width={250}
                        height={250}
                        alt="Tela de login"
                        className="object-contain rounded-md hover:opacity-80 transition-opacity"
                    />
                </div>
            </div>

            {expandedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
                    onClick={handleCloseExpandedImage}
                >
                    <div 
                        className="relative max-w-full max-h-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={expandedImage.src}
                            alt={expandedImage.alt}
                            width={1200}
                            height={800}
                            style={{ objectFit: 'contain', maxWidth: '90vw', maxHeight: '90vh' }}
                        />
                        <button
                            onClick={handleCloseExpandedImage}
                            className="absolute top-2 right-2 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 text-xl leading-none"
                            aria-label="Fechar imagem expandida"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}