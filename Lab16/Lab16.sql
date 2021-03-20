IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')
DROP TABLE Materiales

CREATE TABLE Materiales (
	Clave NUMERIC(5) NOT NULL, 
	Descripcion VARCHAR(50), 
	Costo NUMERIC(8, 2)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
DROP TABLE Proveedores

CREATE TABLE Proveedores (
	RFC CHAR(13) NOT NULL, 
	RazonSocial VARCHAR(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
DROP TABLE Proyectos

CREATE TABLE Proyectos (
	Numero NUMERIC(5) NOT NULL, 
	Denominacion VARCHAR(50)
)

IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')
DROP TABLE Entregan

CREATE TABLE Entregan (
	Clave NUMERIC(5) NOT NULL, 
	RFC CHAR(13) NOT NULL, 
	Numero NUMERIC(5) NOT NULL, 
	Fecha DateTime NOT NULL, 
	Cantidad NUMERIC(8, 2)
)

BULK INSERT a1610399.a1610399.[Materiales]
  FROM 'e:\wwwroot\rcortese\materiales.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

BULK INSERT a1610399.a1610399.[Proyectos]
	FROM 'e:\wwwroot\rcortese\proyectos.csv'
	WITH
	(
	 CODEPAGE = 'ACP',
	 FIELDTERMINATOR = ',',
	 ROWTERMINATOR = '\n'
	)

BULK INSERT a1610399.a1610399.[Proveedores]
  FROM 'e:\wwwroot\rcortese\proveedores.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

 SET DATEFORMAT dmy 
 BULK INSERT a1610399.a1610399.[Entregan]
  FROM 'e:\wwwroot\rcortese\Entregan.csv'
  WITH
  (
    CODEPAGE = 'ACP',
    FIELDTERMINATOR = ',',
    ROWTERMINATOR = '\n'
  )

SELECT * FROM Materiales
SELECT * FROM Proveedores
SELECT * FROM Entregan
SELECT * FROM Proyectos

INSERT INTO Materiales VALUES(1000, 'xxx' 1000) 
-- ya existe la llave 

DELETE FROM Materiales WHERE Clave = 1000 and Costo = 1000

--no existe el registro

ALTER TABLE Materiales ADD CONSTRAINT llaveMateriales PRIMARY KEY (Clave)

sp_helpconstraint Materiales

--La llave primaria ahora es la clave

ALTER TABLE Proyectos ADD CONSTRAINT llaveProyectos PRIMARY KEY (Numero)
ALTER TABLE Proveedores ADD CONSTRAINT llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Entregan ADD CONSTRAINT llavesEntregan PRIMARY KEY (Clave, RFC, Numero)

ALTER TABLE Entregan drop constraint llavesEntregan

INSERT INTO Entregan values (0, 'xxx', 0, '1-jan-02', 0) 

DELETE FROM Entregan WHERE Clave = 0

ALTER TABLE Entregan add constraint cfentreganclave
FOREIGN KEY(Clave) REFERENCES Materiales (Clave)

ALTER TABLE Entregan add constraint cfentreganrfc
FOREIGN KEY(RFC) REFERENCES Proveedores (RFC)

ALTER TABLE Entregan add constraint cfentregannumero
FOREIGN KEY(Numero) REFERENCES Proyectos (Numero)

sp_helpconstraint Materiales
sp_helpconstraint Proveedores
sp_helpconstraint Entregan
sp_helpconstraint Proyectos

INSERT INTO Entregan values (1000, 'AAAA800101', 5000, GETDATE(), 0)

DELETE FROM Entregan WHERE Cantidad = 0

ALTER TABLE Entregan add constraint cantidad check (cantidad > 0)

