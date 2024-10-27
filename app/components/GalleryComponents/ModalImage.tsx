// components/ModalImage.tsx
import Modal from 'react-modal';

type ModalImageProps = {
  isOpen: boolean;
  imageSrc: string | null;
  imageAlt: string | null;
  onClose: () => void;
};

Modal.setAppElement('body');

const ModalImage = ({ isOpen, imageSrc, imageAlt, onClose }: ModalImageProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-75"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white bg-gray-800 hover:bg-gray-600 rounded-full"
          aria-label="Close modal"
        >
          &#10005;
        </button>

        {/* Image */}
        {imageSrc && (
          <img
            src={imageSrc}
            alt={imageAlt ?? ''}
            className="w-full h-auto max-h-[90vh] object-cover rounded-lg"
          />
        )}
      </div>
    </Modal>
  );
};

export default ModalImage;
