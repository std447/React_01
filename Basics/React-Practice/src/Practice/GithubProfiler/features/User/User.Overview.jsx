import { Container,Row,Col } from "reactstrap";
import RepoCard from "../../Components/Card/repo.card";
import { useEffect,useState } from "react";
import {sampleRepo} from "../../Navigation/sample";
import { userRepo } from "./User.API";
import { useParams } from "react-router-dom";

const OverviewComp = (...props) => {
  const [repos,setRepos] = useState(sampleRepo);
  const {id} = useParams();
  useEffect(() => {
    userRepo(id).then((data) => setRepos(data));
  }, [id]);

  const _Pinned = repos.sort(function sortByLastUpdated(r1,r2){
    const r1Date = new Date(r1.updated_at);
    const r2Date = new Date(r2.updated_at);

      if (r1Date.getDate()<r2Date.getDate()) {
        return 1;
      }
      if(r1Date.getDate()>r2Date.getDate()){
        return -1;
      } 
      return 0;
  }).slice(0,6);

  _Pinned.forEach((repo) => console.log(repo.id));
  
  
  // const _repos = useContext('repoProvider') || sampleRepo;
  return(
  <>
    <Container>
      <h3 className="my-2 mx-1">Pinned</h3>
      <Row xs="1" sm="2" className="w-100">
        {_Pinned.map((repo)=>{
         
          return (<>
          <Col key={repo.id}>
          <RepoCard  {...repo} />
          </Col>
          </>)
        })}
      </Row>
    </Container>
  </>
  )
};

export default OverviewComp;