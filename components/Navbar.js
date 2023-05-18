import React from "react";
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";



export default function App() {
  const [variant, setVariant] = React.useState("sticky");

  
  return (
    <>
      <Navbar isBordered variant={variant} css={{w: "100%"}}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
      </Navbar>  
    </>
  )
}
