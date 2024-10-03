
const SidebarOptions = () => {
  return (
    <section>
      {
        [{path: "/", label: "post"}].map(link => <p>{link.label}</p>)
      }
    </section>
  );
};

export default SidebarOptions;