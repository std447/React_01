
import { Container,Row,Col } from "reactstrap";
import RepoCard from "../../Components/Card/repo.card";
import { useEffect,useState } from "react";
import {sampleRepo} from "../../Navigation/sample";
import { userRepo } from "../User/User.API";
import { useParams } from "react-router-dom";


const RepoPage = (...props) => {
  const [repos,setRepos] = useState(sampleRepo);
  const {id} = useParams();
  useEffect(() => {
    userRepo(id).then((data) => setRepos(data));
    console.log({repos});
  }, [id]);

  const _Pinned = repos.filter((repo) => {
    const {id,} = repo
  })
  
  return(
  <>
    <Container>
      <h3 className="my-2 mx-1">Repositeries</h3>
      <Row xs="1">
        {repos.map((repo)=>{
          return (<>
          <Col>
            <RepoCard key={repo.id} {...repo} />
          </Col>
          </>)
        })}

      </Row>
    </Container>
  </>
  )
};

export default RepoPage;


