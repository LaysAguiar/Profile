import { Button, Container, Contend } from "components/initial/style";
import React from "react";
import Image from "next/image";
// import { Container } from './styles';

const Initial = () => {
	return (
		<Contend>
			<Container>
				<h1>
					Ei, eu sou a <span>Lays</span>{" "}
				</h1>

				<h1>desenvolvedora </h1>
				<h1> Front-end</h1>
				<h1>
					{" "}
					em <span>ascensão</span>{" "}
				</h1>
				<Button>Veja meu Trabalho</Button>
			</Container>
			<Container>
				<div>
					<Image alt="barbecue" src="/layscircle.svg" objectFit="cover" width={600} height={600} />
				</div>
			</Container>
		</Contend>
	);
};

export default Initial;
