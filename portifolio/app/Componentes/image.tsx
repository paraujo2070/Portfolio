import Image from 'next/image'
import img1 from '../image/Screenshot_20191212-175256.png';
import img2 from '../image/Screenshot_20191212-203009.png';
import img3 from '../image/Screenshot_20191216-183305.png';
import img4 from '../image/Screenshot_20200204-002740.png';
import img5 from '../image/Screenshot_20200204-002746.png';
import img6 from '../image/Screenshot_20200204-002936.png';
export default function Imagem() {
    return (
        <div >
            <div className="flex flex-row">
                <div className="basis-3xs">
                    <Image
                        src={img3}
                        width={250}
                        height={250}
                        alt="App na play story"
                    />
                </div>
                <div className="basis-3xs">
                    <Image
                        src={img1}
                        width={250}
                        height={250}
                        alt="Tela de Login"
                    />
                </div>
                <div className="basis-3xs">
                    <Image
                        src={img2}
                        width={250}
                        height={250}
                        alt="Tela Inicial"
                    />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="basis-3xs">
                    <Image
                        src={img4}
                        width={250}
                        height={250}
                        alt="Login"
                    />
                </div>
                <div className="basis-3xs">
                    <Image
                        src={img5}
                        width={250}
                        height={250}
                        alt="Picture of the author"
                    />
                </div>
                <div className="basis-3xs">
                    <Image
                        src={img6}
                        width={250}
                        height={250}
                        alt="Picture of the author"
                    />
                </div>
            </div>
        </div>
    )
}