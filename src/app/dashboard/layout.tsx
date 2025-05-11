import LayoutLogin from "@/layout/layout-login";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LayoutLogin>{children}</LayoutLogin>
    </>
  );
}
