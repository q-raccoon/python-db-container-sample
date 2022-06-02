import { useState, useEffect } from 'react';
import { MATCH_COLOR, NOT_MATCH_COLOR } from './color';

const Img = ({file, onUploadHandler, onMatch, onNotMatch}) => {
  const [img, setImg] = useState('');
  const [predict, setPredict] = useState('');

  useEffect(() => {
    let reader = new FileReader();
    reader.onloadend = () => {
      setImg(reader.result);
    };
    reader.readAsDataURL(file);
  }, [])
      
  useEffect(() => {
    if(!predict?.name) return;
    
    isMatch(predict) ? onMatch() : onNotMatch()
  }, [predict])

  const onPredictHandler = async (file) => {
    const data = await onUploadHandler(file)
    setPredict(data)
  }

  const isMatch = () => file.name.split('.')[0] === predict.name

  const getColor = () => {
    if(!predict?.name) {
      return 'black';
    }
    return isMatch() ? MATCH_COLOR : NOT_MATCH_COLOR;
  }

  return (
    <>
      <table>
        <tr>
          <td style={{width: 120, height: 54}}><img src={img} alt="preview" /></td>
          <td style={{width: 120, height: 54, color: getColor()}}><span>{file.name}</span></td>
          <td style={{width: 120, height: 54}}><button onClick={() => onPredictHandler(file)} >예측</button></td>
          <td style={{width: 120, height: 54, color: getColor()}}><span>예측결과<br />{predict?.name}</span></td>
        </tr>
      </table>
    </>

  )
}

export default Img;