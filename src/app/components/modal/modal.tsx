"use client"
type PropsType = {
    isModalOpen: boolean
    setIsModalOpen: (open: boolean) => void
    children: React.ReactNode
}

const Modal: React.FC<PropsType> = (props) => {
    const { isModalOpen,children, setIsModalOpen } = props

    return (
        <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
            <div className='modal-box relative'>
                <label
                    onClick={() => setIsModalOpen(false)}
                    className='btn btn-sm btn-circle absolute right-2 top-2'
                >
                    ✕
                </label>
                {children}
            </div>
        </div>
    )
}

export default Modal