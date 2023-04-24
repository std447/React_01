import { Card, CardBody, CardSubtitle, CardText } from "reactstrap";
import {GoRepo,GoRepoForked,GoStar,GoPrimitiveDot} from "react-icons/go";
import { _langColor } from "../../Navigation/color";
const RepoCard = (props) => {
    const {html_url,name:repoName,visibility,description,language,stargazers_count,forks} = props;
    console.log("@CC-colorcode",(!!language)?_langColor[language]?.color:"white");
    
  return (
    <>
      <Card className="m-2 ">
        <CardBody>
          <CardSubtitle>
            <GoRepo />{" "}
            <a href={html_url}>{repoName}</a>{" "}
            <span className="fw-bold">{visibility}</span>
          </CardSubtitle>
          
          <CardText>
            {(!!description) ?  description :""}
          </CardText>
         
          <CardText>
            {(!!language)?(<><GoPrimitiveDot color={_langColor[language]?.color} />{language}</>):(<></>)}
            {(!!stargazers_count)?(<><GoStar color="#999" />&nbsp;{stargazers_count}</>):(<></>)}
            {(!!forks)?(<><GoRepoForked color="#999"/>&nbsp;{forks}</>):(<></>)}


          </CardText>
            
        </CardBody>

      </Card>
    </>
  )
}

export default RepoCard;