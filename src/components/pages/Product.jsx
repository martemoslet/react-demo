import { useParams } from 'react-router-dom';
export default function Product() {
    let params = useParams();
    console.log(params);
    return <div>Individual product page: {params.id}</div>;
  }