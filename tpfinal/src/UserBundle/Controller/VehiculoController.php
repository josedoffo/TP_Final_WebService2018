<?php

namespace UserBundle\Controller;

use UserBundle\Entity\Vehiculo;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

use Symfony\Component\HttpFoundation\Response; 
use Symfony\Component\Serializer\Serializer; 
use Symfony\Component\Serializer\Encoder\JsonEncoder; 
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer; 

/**
 * Vehiculo controller.
 *
 * @Route("vehiculo")
 */
class VehiculoController extends Controller
{

    /**
     * Lists all vehiculo entities.
     *
     * @Route("/", name="vehiculo_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();  
        $empresas = $em->getRepository('UserBundle:Vehiculo')->findAll();  
        $response = new Response();  $encoders = array(new JsonEncoder()); 
        $normalizers = array(new ObjectNormalizer()); 
        $serializer = new Serializer($normalizers, $encoders);
        $response->setContent(json_encode(array(  'vehiculos' => $serializer->serialize($empresas, 'json'),  )));
        $response->headers->set('Content-Type', 'application/json');  return $response;
    }

    /**
     * Creates a new vehiculo entity.
     *
     * @Route("/new", name="vehiculo_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
       
        $veh = new Vehiculo();
        
        $veh->setPatente($request->request->get('patente'));
        $veh->setMarca($request->request->get('marca'));
        $veh->setModelo($request->request->get('modelo'));
        $veh->setPathimagen($request->request->get('pathimagen'));
        $veh->setDisponible($request->request->get('disponible'));

        $em = $this->getDoctrine()->getManager();    
        $em->persist($veh);
        $em->flush();
       
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Finds and displays a vehiculo entity.
     *
     * @Route("/{id}", name="vehiculo_show")
     * @Method("GET")
     */
    public function showAction(Vehiculo $vehiculo)
    {
        $deleteForm = $this->createDeleteForm($vehiculo);

        return $this->render('vehiculo/show.html.twig', array(
            'vehiculo' => $vehiculo,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing vehiculo entity.
     *
     * @Route("/{id}/edit", name="vehiculo_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Vehiculo $vehiculo)
    {
        $data = json_decode($request->getContent(), true);
        $request->request->replace($data);
        $sn = $this->getDoctrine()->getManager();
        $veh = $sn->getRepository('UserBundle:Vehiculo')->find($request->request->get('id'));

        $veh->setPatente($request->request->get('patente'));
        $veh->setMarca($request->request->get('marca'));
        $veh->setModelo($request->request->get('modelo'));
        $veh->setPathimagen($request->request->get('pathimagen'));
        $veh->setDisponible($request->request->get('disponible'));
        $sn->flush();

        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);

    }

    /**
     * Deletes a vehiculo entity.
     *
     * @Route("/{id}", name="vehiculo_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Vehiculo $vehiculo)
    {
        $data = new Vehiculo;
        $sn = $this->getDoctrine()->getManager();
    
        $veh = $this->getDoctrine()->getRepository('UserBundle:Vehiculo')->find($vehiculo);
        $sn->remove($veh);
        $sn->flush();
        $result['status'] = 'ok';
        return new Response(json_encode($result), 200);
    }

    /**
     * Creates a form to delete a vehiculo entity.
     *
     * @param Vehiculo $vehiculo The vehiculo entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Vehiculo $vehiculo)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('vehiculo_delete', array('id' => $vehiculo->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
