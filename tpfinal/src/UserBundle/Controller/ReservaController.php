<?php

namespace UserBundle\Controller;

use UserBundle\Entity\Reserva;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response; 
use Symfony\Component\Serializer\Serializer; 
use Symfony\Component\Serializer\Encoder\JsonEncoder; 
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer; 
/**
 * Reserva controller.
 *
 * @Route("reserva")
 */
class ReservaController extends Controller
{

    /**
     * Validate user.
     *
     * @Route("/propio", name="reserva_propio")
     * @Method({"GET", "POST"})
     */
    public function propioAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);

        $username = $request->request->get('usuario');
        $criteria = array('usuario' => $username);
        $em = $this->getDoctrine()->getManager();
        $user = $em->getRepository("UserBundle:Usuario")->findBy($criteria);
        $criteria2 = array('usuario' => $user);
        $novedade = $em->getRepository("UserBundle:Reserva")->findBy($criteria2);
        //genero la respuesta hacia el cliente
        $response = new Response();
        $encoders = array(new JsonEncoder());
        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $response->setContent(json_encode(array(
        'reservas' => $serializer->serialize($novedade, 'json'),
        )));
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }



    /**
     * Lists all reserva entities.
     *
     * @Route("/", name="reserva_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();
        $mensajes = $em->getRepository('UserBundle:Reserva')->findAll();
        $response = new Response();
        $encoders = array(new JsonEncoder());

        $normalizers = array(new ObjectNormalizer());
        $serializer = new Serializer($normalizers, $encoders);
        $response->setContent(json_encode(array(
        'reservas' => $serializer->serialize($mensajes, 'json'),
        )));
        $response->headers->set('Content-Type', 'application/json');
        return $response;        

    }

    /**
     * Finds and displays a reserva entity.
     *
     * @Route("/{id}", name="reserva_show")
     * @Method("GET")
     */
    public function showAction(Reserva $reserva)
    {

        return $this->render('reserva/show.html.twig', array(
            'reserva' => $reserva,
        ));
    }

     /**
     * Creates a new reserva entity.
     *
     * @Route("/new", name="reserva_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {

        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        $mensaje = new Reserva();
        $mensaje->setDias($request->request->get('dias'));
        $mensaje->setCostoRenta($request->request->get('costoRenta'));
        $mensaje->setEstado($request->request->get('estado'));
        $fecha = new \DateTime($request->request->get('fechaRenta'));
        $mensaje->setFechaRenta($fecha);
        //confecciono una entidad empresa para asignar a mensaje
        $veArray= $request->request->get('vehiculo');
        $idve = $veArray['id'];
        $em = $this->getDoctrine()->getManager();
        $ve = $em->getRepository("UserBundle:Vehiculo")->find($idve);
        $mensaje->setVehiculo($ve);
        //$mensaje->setVehiculo($request->request->get('vehiculo'));     
   //     $em->persist($mensaje);
   //     $em->flush();
        $userArray= $request->request->get('usuario');
        $iduser = $userArray['id'];
       // $e = $this->getDoctrine()->getManager();
        $usuario = $em->getRepository("UserBundle:Usuario")->find($iduser);
        $mensaje->setUsuario($usuario);
//        $mensaje->setUsuario($request->request->get('usuario'));
        $em->persist($mensaje);
        $em->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }


     /**
     * Displays a form to edit an existing usuario entity.
     *
     * @Route("/{id}/edit", name="reserva_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request,Reserva $usuario)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        $em = $this->getDoctrine()->getManager();
        $usuario = $em->getRepository('UserBundle:Reserva')->find($usuario);
        $usuario->setDias($request->request->get('dias'));
        $usuario->setCostoRenta($request->request->get('costoRenta'));
        $usuario->setEstado($request->request->get('estado'));

        $veArray= $request->request->get('vehiculo');
        $idve = $veArray['id'];
        $em2 = $this->getDoctrine()->getManager();
        $ve = $em2->getRepository("UserBundle:Vehiculo")->find($idve);
        $ve->setDisponible( ($usuario->getEstado() == "aceptada") ? false : true);
        $em2->flush();



        $em->persist($usuario);
        $em->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

      /**
     * Deletes a reserva entity.
     *
     * @Route("/{id}", name="reserva_delete")
     * @Method("DELETE")
     */
    public function deleteAction($id)
    {
        $em = $this->getDoctrine()->getManager();
        $usuario = $em->getRepository('UserBundle:Reserva')->find($id);
        if (!$usuario){
            throw $this->createNotFoundException('id incorrecta');
        }
        $em->remove($usuario);
        $em->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }
}

