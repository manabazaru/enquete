"use client";

import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Card, Row, Col } from "react-bootstrap";
import dynamic from "next/dynamic";
import html2canvas from "html2canvas";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const Pie = dynamic(() => import("react-chartjs-2").then(mod => mod.Pie), { ssr: false });

export default function SurveyCard({ departmentName, responseRate, responseCount }) {
  const [show, setShow] = useState(false);
  const [animate, setAnimate] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const chartData = {
    labels: ["未回答", "回答済"],
    datasets: [
      {
        data: [100 - responseRate, responseRate],
        backgroundColor: ["#003f5c", "#7a9fc5"],
        borderWidth: 0,
      },
    ],
  };

  const downloadImage = async () => {
    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const link = document.createElement("a");
      link.download = "chart.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <>
      <div className={`survey-wrapper ${animate ? "fade-in" : ""}`}>
        <Card
          className="survey-card p-3 mb-3 shadow-sm hover-card"
          onClick={() => setShow(true)}
          style={{ cursor: "pointer" }}
        >
          <Row className="align-items-center justify-content-between flex-nowrap">
            <Col xs={6} className="text-center">
              <h3 className="fw-bold mb-2">{departmentName}</h3>
              <h6 className="mb-1">回答率: {responseRate} %</h6>
              <h6 className="mb-0">回答数: {responseCount}</h6>
            </Col>
            <Col xs={6} className="d-flex justify-content-center position-relative">
              <div ref={chartRef} style={{ width: "300px", height: "300px" }}>
                <Pie data={chartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </div>
              <Button
                variant="light"
                size="sm"
                className="position-absolute top-0 end-0 m-1"
                onClick={(e) => {
                  e.stopPropagation();
                  downloadImage();
                }}
              >
                ⬇
              </Button>
            </Col>
          </Row>
        </Card>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>詳細</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{departmentName} の詳細情報がここに表示されます。</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            閉じる
          </Button>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .hover-card:hover {
          box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
          transform: scale(1.01);
          transition: all 0.3s ease;
        }
        .survey-wrapper {
          display: inline-block;
          width: 600px;
          max-width: 800px;
          margin: 0.5rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .fade-in {
          animation: fade-in 2s ease-out forwards;
        }
        .survey-card {
          width: 100%;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
}