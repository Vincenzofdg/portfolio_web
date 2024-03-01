import Introduction from "./Introduction";
import Question from "./Question";
import Client from "./Client";

const ContentSwitch = ({type, current}) => {
  const obj = {
    Cliente: <Client current={current}/>,
    Introdução: <Introduction current={current} />,
    Perguntas: <Question current={current}/>,
  };
  
  return obj[type];
}

export default ContentSwitch;