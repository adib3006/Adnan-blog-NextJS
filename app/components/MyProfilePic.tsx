import Image from 'next/image';

export default function MyProfilePic() {
    return (
        <section className="w-full mx-auto">
            <Image
                className="border-4 border-black dark:border-white/20 hover:dark:border-white/50 duration-200 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src={'/images/profile.png'}
                width={200}
                height={200}
                priority={true}
                alt="Mirza Adnan"
            />
        </section>
    );
}
