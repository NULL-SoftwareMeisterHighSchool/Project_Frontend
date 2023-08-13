import { Viewer } from '@toast-ui/react-editor';

type Props = {
    content: string;
}

const View = (
    {content}:Props
) => {
    return ( 
        <Viewer initialValue={content} />
     );
}
 
export default View;