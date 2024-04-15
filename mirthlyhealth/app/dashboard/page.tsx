const Dashboard = () => {
  return (
    <div>
      <div className='flex'>
        <div className='basis-3/4 border-black border-2'>
          <nav className='flex justify-between p-4'>
            <div>Mirthly Health</div>
            <div className='flex gap-4 '>
              <div>about</div>
              <div>contact</div>
            </div>
          </nav>
        </div>
        <div className='basis-1/4'>
          <div>Graph</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
