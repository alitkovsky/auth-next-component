const AuthLayout = ({
   children
}: {
   children: React.ReactNode;
}) => {
  return (
    <div className="flex h-full items-center justify-center text-white bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-500 via-purple-500 to-indigo-500">
      {children}
    </div>
  );
};

export default AuthLayout;