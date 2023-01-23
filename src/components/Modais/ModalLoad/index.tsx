import { Container } from './styles';
import loading from '../../../assets/loading2.gif';

function ModalLoad() {
  return (
    <Container>
      <div>
        <img src={loading} alt="loading" />
      </div>
    </Container>
  );
}

export default ModalLoad;
