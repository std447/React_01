import {Card, CardBody,CardTitle,CardText,CardSubtitle,Button} from 'reactstrap'

 
const ProductCard = (props) => {

  const {src,title,} = props

  return(
    <>
    <Card
  style={{
    width: '10rem'
  }}
>
  <img
    src={src}
  />
  <CardBody>
    <CardTitle tag="h5">
      {title}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      Card subtitle
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
  </CardBody>
</Card>
    
    </>
  )

}
export default ProductCard;