<?php

namespace App\Http\Controllers;
use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
     Public function location(Request $req)
    {
        $location=new Location();
        $location->name=$req->name;
        $result=$location->save();
        if($result)
        {
            return["result"=>"data has been saved"];
        }
        else
        {
            return["result"=>"failed"];
        }
    }
     function showByIDlocation(Request $req, $id)
    {
        $location = Location::find($id);
        return $location;
    }
      
    public function getlocation(Request $req)
    {
        $requestParam = $req->all();
        $query=Location::select('locations.*');
        if(!empty($requestParam))
        {
            $query->Where('locations.name','like',"%".$requestParam['q']."%");
        }
        $query->orderBy("{$requestParam['sortBy']}","{$requestParam['sortOrder']}");
        $result=$query->paginate($requestParam['limit']);
        return $result;
    }
     public  function Updatelocation (Request $req, $id)
    {
        $location = Location::find($id);
        $location->name=$req->name;
        $location->update();
        return $location;
    }
      public function Deletelocation($id)
    { 
        $location = Location::find($id);
        $location->delete();
        return $location;
    }

}
