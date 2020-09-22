import React, { useState, useEffect } from "react";
import "./imageUpload.scss";

import { useDropzone } from "react-dropzone";
import { MdClose } from "react-icons/md";
import { Col, Row } from "react-bootstrap";

const ImageUpload = (props) => {
  const [files, setFiles] = useState([]);
  const previewSize = Math.max(Math.floor(12 / props.maxImages), 4);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: props.maxImages || 10,
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  useEffect(() => {
    props.onChange(files);
    return () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  const removeImage = (idx) =>
    setFiles(files.filter((_, fileidx) => fileidx !== idx));

  const images = files.map((file, idx) => (
    <Col md={previewSize} className="img mb-2 mx-auto">
      <MdClose
        onClick={() => removeImage(idx)}
        size={20}
        className="close-button"
      />
      <img style={{ width: "100%" }} src={URL.createObjectURL(file)} />
    </Col>
  ));
  //   console.log(files);
  return files.length > 0 ? (
    <Row className="img-container">{images}</Row>
  ) : (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <p className=" text text-center">{props.tag}</p>
    </div>
  );
};

export default ImageUpload;
