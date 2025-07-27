import { Modal } from 'react-bootstrap';
import NormalButton, { NormalButtonProp } from '@/components/common/elements/NormalButton';
import 'bootstrap/dist/css/bootstrap.min.css';

export interface MyModalProps{
    show: boolean;
    onHide: () => void;
    title: string;
    content: React.ReactNode;
    buttonProps: NormalButtonProp[];
    centered?: boolean;
    size?: 'sm' | 'lg' | 'xl';
}

const MyModal = ({
                  show, 
                  onHide, 
                  title, 
                  content, 
                  buttonProps, 
                  centered=true, 
                  size,
                }: MyModalProps) => {
    return (
        <Modal show={show} onHide={onHide} centered={centered} size={size}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {content}
            </Modal.Body>

            <Modal.Footer className="d-flex justify-content-center gap-4">
                {buttonProps.map((prop, i) => (
                    <NormalButton 
                        key={i}
                        label={prop.label}
                        onClick={prop.onClick}
                        variant={prop.variant}
                        color={prop.color}
                        size={prop.size}/>
                ))}
            </Modal.Footer>
        </Modal>
    )
    
};

export default MyModal;