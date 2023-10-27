import { NavLink } from 'react-router-dom';

interface NavBarProps {
  bars: Array<{ to: string; label: string }>;
}

const navClassHandle = ({ isActive }: { isActive: boolean }) =>
  [
    'flex-1',
    'h-20',
    `bg-gray-${isActive ? '700' : '500'}`,
    `${isActive ? 'rounded-b-full' : ''}`,
  ].join(' ');

const NavBar: React.FC<NavBarProps> = ({ bars }) => {
  return (
    <div className='flex bg-gray-500 px-[2.5rem]'>
      {bars.map((bar) => (
        <NavLink key={bar.label} to={bar.to} className={navClassHandle}>
          <div className='h-full w-full flex items-center justify-center text-gray-300'>
            {bar.label}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
