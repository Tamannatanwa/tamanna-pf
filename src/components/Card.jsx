import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
      borderRadius="10px"
      textAlign="center"
      spacing="20px"
      width="500px"
      height="450px"
      color="black"
    >
      <Image
        src={imageSrc}
        alt={title}
        objectFit="cover"
        width="100%"
        height="250px"
        borderRadius="10px 10px 0 0"
      />
      <Heading size="md">{title}</Heading>
      <Text color="gray">{description}</Text>
      <HStack>
        <Text>Learn more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
