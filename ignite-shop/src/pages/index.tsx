import { styled } from "../styles/index"

const Button = styled("button", {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: "none",
  padding: "4px 8px",

  span: {
    fontWeight: "bold",
  }
})

export default function Home() {
  return (

  <Button>
    Enviar
    <span>Teste</span>
  
  </Button>
  )
}
