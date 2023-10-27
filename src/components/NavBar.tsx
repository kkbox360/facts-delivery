import { NavLink } from 'react-router-dom';

interface NavBarProps {}

const navClassHandle = ({ isActive }: { isActive: boolean }) =>
  [
    'flex-1',
    'h-20',
    `bg-gray-${isActive ? '700' : '500'}`,
    `${isActive ? 'rounded-b-full' : ''}`,
  ].join(' ');

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className='flex bg-gray-500 px-[2.5rem]'>
      <NavLink to='/' className={navClassHandle}>
        <div className='h-full w-full flex items-center justify-center text-gray-300'>
          Cat Fact
        </div>
      </NavLink>
      <NavLink to='/favorite' className={navClassHandle}>
        <div className='h-full w-full flex items-center justify-center text-gray-300'>
          Favorites
        </div>
      </NavLink>
    </div>
  );
};

export default NavBar;
