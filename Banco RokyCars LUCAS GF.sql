use rokycars;

insert into clientes (img,nome,country) values
("roky.jpg","RokyLobinho","Brazil"),
("bk.jpg","BK4","Slovakia"),
("viny.jpg","VinyTyphon","Brazil"),
("rofl.jpg","RoflWaffle","United Kingdom");

select * from clientes;

insert into pedidos (valor) values
(120000),
(500000),
(350000),
(240000);

insert into produtos (img,nome,preco,descricao) values
("corvette.jpg","Chevrolet Corvette CR7",120000,"Com um design aerodinâmico e agressivo, apresenta um motor potente, oferecendo desempenho excepcional."),
("huracan.jpg","Lamborghini Huracán",500000,"Equipado com um motor V10 potente, oferece aceleração impressionante e uma experiência de condução emocionante."),
("cayman.jpg","Porsche Cayman GT4",350000, "Equipado com um motor flat-six de alta potência, oferece uma experiência de condução envolvente e dinâmica."),
("skyline.jpg","Nissan SKYLINE GT-R [R32]",240000,"Equipado com um motor RB26DETT de 2.6 litros e um sistema de tração integral ATTESA, oferece aceleração rápida e controle excepcional em curvas." ),
("amg.jpg","Mercedes AMG GT3",440000,"Equipado com um motor V8 biturbo de alta performance, oferece aceleração rápida e velocidades impressionantes."),
("integra.jpg","Honda Integra",100000, "Equipado com um motor de alta rotação, oferece uma experiência de condução emocionante, com respostas rápidas e excelente manuseio."),
("supra.jpg", "Toyota Supra GT500",790000, "Equipado com um motor turboalimentado de alto desempenho, combina potência com um chassi leve e aerodinâmico, otimizado para maximizar a estabilidade e o controle nas pistas.");