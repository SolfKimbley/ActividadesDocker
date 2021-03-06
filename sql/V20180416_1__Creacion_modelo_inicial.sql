/* ---------------------------------------------------- */
/*  Generated by Enterprise Architect Version 12.0 		*/
/*  Created On : 18-abr.-2018 12:13:35 p. m. 				*/
/*  DBMS       : PostgreSQL 						*/
/* ---------------------------------------------------- */

/* Drop Sequences for Autonumber Columns */

/* Create Tables */

CREATE SCHEMA app_prueba;

SET search_path TO app_prueba;



CREATE TABLE "Actividad"
(
    "id_actividad" bigserial NOT NULL,
    "descripcion" varchar(50)     NOT NULL ,
    "fecha_registro" varchar(50)     NOT NULL,
    "fecha_limite" varchar(50)     NOT NULL,
    "responsable" varchar(50)     NOT NULL,
    "estado" varchar(50)     NOT NULL
)
;

CREATE TABLE "Responsable"
(
    "id_responsable" bigserial NOT NULL,
    "nombre" varchar(50)     NOT NULL ,
    "correo" varchar(50)     NOT NULL,
    "telefono" varchar(50)     NOT NULL
)
;

