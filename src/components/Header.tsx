interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-[#d03b3b] to-[#a52a2a] text-white p-4 text-center rounded-b-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] relative my-2">
      <div className="logo flex items-center justify-center text-2xl font-bold">
        <i className="fas fa-leaf mr-2 text-[#ffd700]"></i>
        <span>{title}</span>
      </div>
      <div className="search-bar flex max-w-[500px] mx-auto mt-4">
        <input 
          type="text" 
          placeholder="搜索绒花作品、课程、资讯..." 
          className="flex-1 px-4 py-3 rounded-l-[25px] border-none text-[#5c3a21] text-base"
        />
        <button className="px-5 py-3 bg-[#ffd700] text-[#a52a2a] rounded-r-[25px] font-bold">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </header>
  );
}