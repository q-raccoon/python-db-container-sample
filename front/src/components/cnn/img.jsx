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
      return 'rgb(156, 163, 175)';
    }
    return isMatch() ? MATCH_COLOR : NOT_MATCH_COLOR;
  }

  return (
    <div className="grid grid-cols-4 gap-12 pd-3 pb-3 items-center">
      <img src={img} alt="preview" className="rounded-full w-24" />
      <button style={{background: getColor()}} onClick={() => onPredictHandler(file)} disabled={predict?.name}>예측</button>
      <div className="text-gray-50" style={{color: getColor()}}>{file.name}</div>
      <div className="text-gray-50" style={{color: getColor()}}>{predict?.name}</div>
    </div>
  )
}

export default Img;