function HeaderItem({ Icon, title }) {
  return (
    <div>
      <Icon className="h-8"/>
      <p className='tracking-widest'>{title}</p>
    </div>
  );  
}

export default HeaderItem