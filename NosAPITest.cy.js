describe('Restful API', () => {
    const projectURL = 'https://gorest.co.in/public/v2/todos/'
  
    it('GET - List of all users', () => {
     
      cy.request({
        method: 'GET',
        url: projectURL
      }).then((response =>  {
        expect(response.status).to.equal(200)
      }))
    })
  
    it('GET - List of users by ID', () => {
     
      cy.request({
        method: 'GET',
        url: projectURL,
        qs: { id: 	57158, id: 57157, id: 57156}
      }).then((response =>  {
        expect(response.status).to.equal(200)
      }))
  
  
    })

    it('GET - Single user', () => {
   
        cy.request({
          method: 'GET',
          url: projectURL,
          qs: {id: 57155}
        }).then((response =>  {
          expect(response.status).to.equal(200)
        }))
    
      })
    
    it('POST - Add new user', () => {
       
        cy.request({
          method: 'POST',
          url: projectURL,
          failOnStatusCode: false,
          body:
          {
            "id": 57148,
            "user_id": 7028500,
            "title": "Bene uredo concido ventus eus.",
            "due_on": "2024-07-12T00:00:00.000+05:30",
            "status": "completed"
            }
          }).then((response => {
          expect(response.status).to.equal(401)
        }))

      })
    
      it('PUT - Update user', () => {
       
        cy.request({
          method: 'PUT',
          url: projectURL,
          qs: { id: 7654321},
          failOnStatusCode: false,
          body:
          {
            "id": 57148,
            "user_id": 7028500,
            "title": "Bene uredo bene concido ventus eus update name.",
            "due_on": "2024-07-12T00:00:00.000+05:30",
            "status": "completed"
          }
          }).then((response => {
          expect(response.status).to.equal(404)
        }))

      })
    
      it('PATCH - Partially update user', () => {
       
        cy.request({
          method: 'PATCH',
          url: projectURL,
          qs: { id: 57148},
          failOnStatusCode: false,
          body:
          {
            "user_id": 7028999
         }
        }).then((response => {
          expect(response.status).to.equal(404)
        }))
    
      })
    
      it('DELETE - Delete user', () => {
       
        cy.request({
          method: 'DELETE',
          url: projectURL,
          qs: { id: 57148},
          failOnStatusCode: false,
        }).then((response => {
          expect(response.status).to.equal(404)
        }))
      })
    })