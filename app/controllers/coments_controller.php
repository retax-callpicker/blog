<?php
class ComentsController extends AppController {

    var $name = 'Coments';

    function index() {
        return $this->_encodeJsonResponse($this->Coment->find('all'));
    }

    function add() {

        $response = "";
        $error = false;
        $errors = array();
        $data = json_decode(file_get_contents('php://input'));


        if (!empty($data)) {
            if ($coment = $this->Coment->save($data)) {
                $response = $coment;
            } else {
                $error = true;
                $errors[] = "Data error";
            }
        } else {
            $error = true;
            $errors[] = "Empty data";
        }
        
        return $this->_encodeJsonResponse($response, "", $errors);
    }

}