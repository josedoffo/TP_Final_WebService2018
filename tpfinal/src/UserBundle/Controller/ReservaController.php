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
     * Lists all reserva entities.
     *
     * @Route("/", name="reserva_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();  
        $empresas = $em->getRepository('UserBundle:Reserva')->findAll();  
        $response = new Response();  $encoders = array(new JsonEncoder()); 
        $normalizers = array(new ObjectNormalizer()); 
        $serializer = new Serializer($normalizers, $encoders);
        $response->setContent(json_encode(array(  'reservas' => $serializer->serialize($empresas, 'json'),  )));
        $response->headers->set('Content-Type', 'application/json');  return $response;
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
        $reserva = new Reserva();

        $fecha = new \DateTime($request->request->get('fecha'));
        $reserva->setFechaRenta($fecha);
        $reserva->setUsuario($request->request->get('usuario'));
        $reserva->setVehiculo($request->request->get('vehiculo'));
        $reserva->setDias($request->request->get('dias'));
        $reserva->setCostoRenta($request->request->get('costoRenta'));
        $reserva->setEstado($request->request->get('estado'));
        $em = $this->getDoctrine()->getManager();
        $em->persist($reserva);
        $em->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }
}
