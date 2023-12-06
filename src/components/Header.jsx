import Image from 'next/image';
import Link from 'next/link';
import SearchInput from './SearchInput';

const Header = () => {
  return (
    <nav className='flex justify-between items-center py-1'>
      <Link href="/">
        <div className='relative w-[200px] h-[50px]'>
          <Image src="/logo.png" alt="logo" className='object-contain' width={170} height={50} />
        </div>
      </Link>
      <SearchInput />
    </nav>
  );
};

export default Header;
