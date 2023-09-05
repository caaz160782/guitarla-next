import { useRouter } from "next/router"

const Producto = () => {
    const router = useRouter();
    console.log(router);
  return (
    <div>
      producto
    </div>
  )
}

export default Producto
