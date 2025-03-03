"use client";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { getProduct } from "@/services/page";
import ButtonComponent from "@/components/core/Button";
import { useRouter } from "next/navigation";

function ProductComponent() {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await getProduct();
      console.log(response);
      if (response && response.statusCode === 200) {
        const product = response.data;
        setCardsData(product);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const productdetails = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="flex flex-col mt-10 text-black h-full bg-white p-10">
      <div className="text-5xl text-black">Product List</div>
      <div className="justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-10">
        {cardsData && cardsData.length > 0 ? (
          cardsData.map((card: any, index: any) => (
            <Card key={index} sx={{ maxWidth: 345 }} className="m-4 h-full">
              <CardMedia
                component="img"
                alt={card.productName}
                sx={{ height: 300 }}
                image={card.imageURL} // Image URL from backend
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.productName}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {card.description
                    ? card.description
                    : "No Description avaialble"}
                </Typography>
              </CardContent>
              <CardActions>
                
                <ButtonComponent
                  variant="contained"
                  size="small"
                  onClick={() => productdetails(card.id)}
                  label="Learn More"
                  disabled = {loading}
                  loading={loading}
                />
              </CardActions>
            </Card>
          ))
        ) : (
          <div className="text-black">No Product avaliable</div>
        )}
      </div>
    </div>
  );
}

export default ProductComponent;
