import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import backendUrl from "../../Url/backendurl";

function MyTickets() {
  const [pdfBlob, setPdfBlob] = useState(null);

  useEffect(() => {
    // Fetch the PDF file from the backend when the component mounts
    const fetchPdf = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/generateTicket`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("token")}`
          },
        });

        if (response.ok) {
          // Get the PDF content as a Blob
          const pdfBlob = await response.blob();
          setPdfBlob(pdfBlob);
        } else {
          console.error('Error generating ticket:', response.statusText);
        }
      } catch (error) {
        console.error('Error generating ticket:', error);
      }
    };

    fetchPdf();
  }, []);

  return (
    <>
      <Header />
      <div className="my-ticket-container">
        {pdfBlob && (
          <embed
            title="Generated Ticket"
            src={URL.createObjectURL(pdfBlob)}
            type="application/pdf"
            width="100%"
            height="700px"
          />
        )}
      </div>
    </>
  );
}

export default MyTickets;
