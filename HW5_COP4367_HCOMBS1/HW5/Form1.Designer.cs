namespace HW5
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.button1 = new System.Windows.Forms.Button();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.button4 = new System.Windows.Forms.Button();
            this.button5 = new System.Windows.Forms.Button();
            this.button6 = new System.Windows.Forms.Button();
            this.button7 = new System.Windows.Forms.Button();
            this.Difficulty_Label = new System.Windows.Forms.Label();
            this.button8 = new System.Windows.Forms.Button();
            this.lblstatus = new System.Windows.Forms.Label();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.AnswerStatus = new System.Windows.Forms.Label();
            this.Anslabel1 = new System.Windows.Forms.Label();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.BackColor = System.Drawing.Color.SkyBlue;
            this.button1.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.button1.Location = new System.Drawing.Point(12, 46);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 0;
            this.button1.Text = "New Game";
            this.button1.UseVisualStyleBackColor = false;
            this.button1.Click += new System.EventHandler(this.NewGame_Click);
            this.button1.MouseLeave += new System.EventHandler(this.button1_leave);
            this.button1.MouseHover += new System.EventHandler(this.button1_hover);
            // 
            // button2
            // 
            this.button2.BackColor = System.Drawing.Color.SkyBlue;
            this.button2.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.button2.Location = new System.Drawing.Point(12, 75);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 1;
            this.button2.Text = "Load Game";
            this.button2.UseVisualStyleBackColor = false;
            this.button2.Click += new System.EventHandler(this.LoadGame_Click);
            this.button2.MouseLeave += new System.EventHandler(this.button2_leave);
            this.button2.MouseHover += new System.EventHandler(this.button2_hover);
            // 
            // button3
            // 
            this.button3.BackColor = System.Drawing.Color.SkyBlue;
            this.button3.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.button3.Location = new System.Drawing.Point(12, 75);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(75, 23);
            this.button3.TabIndex = 2;
            this.button3.Text = "Save Game";
            this.button3.UseVisualStyleBackColor = false;
            this.button3.Click += new System.EventHandler(this.Save_Game);
            this.button3.MouseLeave += new System.EventHandler(this.button_leave);
            this.button3.MouseHover += new System.EventHandler(this.button3_hover);
            // 
            // button4
            // 
            this.button4.BackColor = System.Drawing.Color.SkyBlue;
            this.button4.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.button4.Location = new System.Drawing.Point(12, 104);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(75, 23);
            this.button4.TabIndex = 3;
            this.button4.Text = "Quit";
            this.button4.UseVisualStyleBackColor = false;
            this.button4.Click += new System.EventHandler(this.Quit_Game);
            this.button4.MouseLeave += new System.EventHandler(this.button4_leave);
            this.button4.MouseHover += new System.EventHandler(this.button4_hover);
            // 
            // button5
            // 
            this.button5.BackColor = System.Drawing.Color.SkyBlue;
            this.button5.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.button5.Location = new System.Drawing.Point(194, 75);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(75, 23);
            this.button5.TabIndex = 5;
            this.button5.Text = "Easy";
            this.button5.UseVisualStyleBackColor = false;
            this.button5.Click += new System.EventHandler(this.Easy_Click);
            this.button5.MouseLeave += new System.EventHandler(this.button5_leave);
            this.button5.MouseHover += new System.EventHandler(this.button5_hover);
            // 
            // button6
            // 
            this.button6.BackColor = System.Drawing.Color.SkyBlue;
            this.button6.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.button6.Location = new System.Drawing.Point(275, 75);
            this.button6.Name = "button6";
            this.button6.Size = new System.Drawing.Size(75, 23);
            this.button6.TabIndex = 6;
            this.button6.Text = "Medium";
            this.button6.UseVisualStyleBackColor = false;
            this.button6.Click += new System.EventHandler(this.Medium_Click);
            this.button6.MouseLeave += new System.EventHandler(this.button6_leave);
            this.button6.MouseHover += new System.EventHandler(this.button6_hover);
            // 
            // button7
            // 
            this.button7.BackColor = System.Drawing.Color.SkyBlue;
            this.button7.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.button7.Location = new System.Drawing.Point(356, 75);
            this.button7.Name = "button7";
            this.button7.Size = new System.Drawing.Size(75, 23);
            this.button7.TabIndex = 7;
            this.button7.Text = "Hard";
            this.button7.UseVisualStyleBackColor = false;
            this.button7.Click += new System.EventHandler(this.Hard_Click);
            this.button7.MouseLeave += new System.EventHandler(this.button7_leave);
            this.button7.MouseHover += new System.EventHandler(this.button7_hover);
            // 
            // Difficulty_Label
            // 
            this.Difficulty_Label.AutoSize = true;
            this.Difficulty_Label.Location = new System.Drawing.Point(272, 46);
            this.Difficulty_Label.Name = "Difficulty_Label";
            this.Difficulty_Label.Size = new System.Drawing.Size(80, 13);
            this.Difficulty_Label.TabIndex = 8;
            this.Difficulty_Label.Text = "Select Difficulty";
            // 
            // button8
            // 
            this.button8.BackColor = System.Drawing.Color.SkyBlue;
            this.button8.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.button8.Location = new System.Drawing.Point(12, 46);
            this.button8.Name = "button8";
            this.button8.Size = new System.Drawing.Size(75, 23);
            this.button8.TabIndex = 9;
            this.button8.Text = "I Give Up";
            this.button8.UseVisualStyleBackColor = false;
            this.button8.Click += new System.EventHandler(this.GiveUp_Click);
            this.button8.MouseLeave += new System.EventHandler(this.button8_leave);
            this.button8.MouseHover += new System.EventHandler(this.button8_hover);
            // 
            // lblstatus
            // 
            this.lblstatus.AutoSize = true;
            this.lblstatus.Location = new System.Drawing.Point(295, 338);
            this.lblstatus.Name = "lblstatus";
            this.lblstatus.Size = new System.Drawing.Size(35, 13);
            this.lblstatus.TabIndex = 10;
            this.lblstatus.Text = "label1";
            this.lblstatus.Click += new System.EventHandler(this.label1_Click);
            // 
            // dataGridView1
            // 
            this.dataGridView1.AllowUserToAddRows = false;
            this.dataGridView1.AllowUserToDeleteRows = false;
            this.dataGridView1.AllowUserToResizeColumns = false;
            this.dataGridView1.AllowUserToResizeRows = false;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.ColumnHeadersVisible = false;
            this.dataGridView1.Location = new System.Drawing.Point(139, 12);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.RowHeadersVisible = false;
            this.dataGridView1.Size = new System.Drawing.Size(365, 312);
            this.dataGridView1.TabIndex = 11;
            this.dataGridView1.CellClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dataGridView1_CellClick);
            this.dataGridView1.CellValidating += new System.Windows.Forms.DataGridViewCellValidatingEventHandler(this.dataGridView1_CellValidating);
            // 
            // AnswerStatus
            // 
            this.AnswerStatus.AutoSize = true;
            this.AnswerStatus.Location = new System.Drawing.Point(13, 177);
            this.AnswerStatus.Name = "AnswerStatus";
            this.AnswerStatus.Size = new System.Drawing.Size(0, 13);
            this.AnswerStatus.TabIndex = 12;
            // 
            // Anslabel1
            // 
            this.Anslabel1.AutoSize = true;
            this.Anslabel1.Location = new System.Drawing.Point(19, 177);
            this.Anslabel1.Name = "Anslabel1";
            this.Anslabel1.Size = new System.Drawing.Size(0, 13);
            this.Anslabel1.TabIndex = 13;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(540, 360);
            this.Controls.Add(this.Anslabel1);
            this.Controls.Add(this.AnswerStatus);
            this.Controls.Add(this.dataGridView1);
            this.Controls.Add(this.lblstatus);
            this.Controls.Add(this.button8);
            this.Controls.Add(this.Difficulty_Label);
            this.Controls.Add(this.button7);
            this.Controls.Add(this.button6);
            this.Controls.Add(this.button5);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.Button button5;
        private System.Windows.Forms.Button button6;
        private System.Windows.Forms.Button button7;
        private System.Windows.Forms.Label Difficulty_Label;
        private System.Windows.Forms.Button button8;
        private System.Windows.Forms.Label lblstatus;
        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.Label AnswerStatus;
        private System.Windows.Forms.Label Anslabel1;
    }
}

