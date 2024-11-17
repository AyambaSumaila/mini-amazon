import { useParams } from "react-router-dom";
function ProductScreen() {
    const params =useParams();
    const {slug} = params.slug;

    return (
        <div>
            <h1>{slug}</h1>
            <p>Product description goes here</p>
        </div>
    )

}
export default ProductScreen;