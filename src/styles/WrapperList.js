import styled from 'styled-components';


export const WrapperList = styled.div`
     width: 70%;
     margin-bottom: 0.7rem;
     padding-bottom: 1rem;
     padding: 0.5rem;
     display: flex;
     justify-content: space-between;
     border: 1px solid #ced4da;
     border-radius: 0.375rem;
  
  .checkbox {
    width: 85%;
    height: auto;
    margin-top: 0.2rem;
    margin-left: 0.3rem;

  .form-check-label {
    font-size: 18px;
    width: 100%;
    height: auto;
    word-break: break-all;
     }
  .form-check-input {
    font-size: 20px;
     }
  .form-check-input:focus {
    box-shadow: none;
     }
   }
   textarea {
    font-size: 18px;
   }
  .checkbox-complited {
     margin-top: 0.2rem;
     margin-left: 0.3rem;
  .form-check-label {
     text-decoration: line-through;
     font-size: 20px;
     }
  .form-check-input {
    font-size: 20px;
     }
  .form-check-input:focus {
    box-shadow: none;
     }
  .form-check-input:checked  {
    background-color: #009000;
     }
  }

  .icon-container {
    padding-right: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .delete-icon {
   cursor: pointer;
   color: #C70000;
   font-size: 20px;
  }
  .edit-icon {
   cursor: pointer;
   color: #FFBF00;
   font-size: 17px;
  }

  .container {
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;

    .done-icon {
   cursor: pointer;
   font-size: 20px;
   fill: #306844;
     }
  }

  .input-group {
   width: 85%;
   margin-bottom: 0 !important;

   textarea {
   height: fit-content;
   overflow: auto;
   ::-webkit-scrollbar {
   display: none;
  }
}
  .form-control {
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    }
  }
  @media (max-width: 400px) {
    width: 92%;
      }
`

export const WrapperAdd = styled.div`
  margin-bottom: 1rem;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

   .input-group {
    .form-control {
      font-size: 1.3rem;
     }
    @media (max-width: 400px) {
    height: 3.3rem;
  }
   }

  @media (max-width: 400px) {
    width: 92%;
  }
`
export const Container = styled.div`
   overflow-y: auto;
   height: 450px;
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;

 ::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(200,200,200,1);
    border-radius: 5px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color:#fff;
   -webkit-box-shadow: inset 0 0 6px rgba(90,90,90,0.7);
}
    `

export const ButtonContainer = styled.div`
   margin-bottom: 1.5rem;
   width: 100%;

  .btn-warning {
     color: white;
    }

  .button-container {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  }
`