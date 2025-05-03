import Image from 'next/image';
import img1 from '../image/IMG_20220821_175658504_PORTRAIT.jpg';

export default function Imginicio() {
    return(
        <div>
    <div className="flex flex-row">
        <div className="rounded-full overflow-hidden shadow-lg relative w-48 h-48">
            <Image
                src={img1}
                alt="Minha foto"
                fill
                className="object-cover"
            />
        </div>
    </div>
</div>
    );
}